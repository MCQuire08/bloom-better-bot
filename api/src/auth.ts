import { HttpRequest } from "@azure/functions";
import { createRemoteJWKSet, jwtVerify, JWTPayload } from "jose";

export type CustomerIdentity = { id: string; email: string; name: string; admin: boolean };

let jwks: ReturnType<typeof createRemoteJWKSet> | undefined;

export async function authenticate(request: HttpRequest): Promise<CustomerIdentity> {
  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) throw new Error("UNAUTHORIZED");

  const tenantName = process.env.AZURE_TENANT_NAME;
  const apiClientId = process.env.AZURE_API_CLIENT_ID;
  if (!tenantName || !apiClientId) throw new Error("SERVER_NOT_CONFIGURED");

  const issuer = `https://${tenantName}.ciamlogin.com/${process.env.AZURE_TENANT_ID}/v2.0`;
  jwks ||= createRemoteJWKSet(new URL(`https://${tenantName}.ciamlogin.com/${tenantName}.onmicrosoft.com/discovery/v2.0/keys`));
  const verified = await jwtVerify(token, jwks, { issuer, audience: apiClientId });
  return identityFromClaims(verified.payload);
}

function identityFromClaims(claims: JWTPayload): CustomerIdentity {
  const email = String(claims.email || claims.preferred_username || "").toLowerCase();
  const id = String(claims.oid || claims.sub || "");
  if (!id || !email) throw new Error("UNAUTHORIZED");
  const admins = (process.env.ADMIN_EMAILS || "").toLowerCase().split(",").map(v => v.trim()).filter(Boolean);
  return { id, email, name: String(claims.name || email.split("@")[0]), admin: admins.includes(email) };
}

