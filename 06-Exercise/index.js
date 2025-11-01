// * 1 = using my role
var userRole;
(function (userRole) {
    userRole["SUPER_ADMIN"] = "superadmin";
    userRole["MODERATOR"] = "moderator";
    userRole["VIEWER"] = "viewer";
})(userRole || (userRole = {}));
function canEdit(role) {
    if (role === userRole.VIEWER) {
        console.log("Access is granted");
    }
}
canEdit(userRole.VIEWER);
