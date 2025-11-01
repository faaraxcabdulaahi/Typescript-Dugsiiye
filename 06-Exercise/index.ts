// * 1 = using my role
enum userRole {
  SUPER_ADMIN = "superadmin",
  MODERATOR = "moderator",
  VIEWER = "viewer",
}

function canEdit(role: userRole) {
  if (role === userRole.VIEWER) {
    console.log("Access is granted");
  }
}

canEdit(userRole.VIEWER);
