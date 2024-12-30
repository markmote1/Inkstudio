// // app/api/admin-auth/route.ts

// export async function GET(req: Request) {
//     const adminPassword = process.env.ADMIN_PASSWORD; // Store password in .env.local
  
//     const authorization = req.headers.get("Authorization");
  
//     if (authorization === `Bearer ${adminPassword}`) {
//       return new Response(JSON.stringify({ message: "Authenticated" }), { status: 200 });
//     }
  
//     return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
//   }
  