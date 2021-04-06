"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditBusinessStatusDescription = exports.getInvitationLinkDescription = exports.getCreateFblProfileDescription = exports.getEditDefaultFollowDescription = exports.getEditAthleteTypeDescription = exports.getEditBusinessClubDescription = exports.getEditAthleteVerifiedDescription = exports.getCreateUserDescription = exports.getDeleteUserDescription = void 0;
exports.getDeleteUserDescription = (userType) => `Deleted ${userType} user`;
exports.getCreateUserDescription = (userType) => `Created new ${userType} user`;
exports.getEditAthleteVerifiedDescription = (newStatus) => `Athlete verified changed to ${newStatus}`;
exports.getEditBusinessClubDescription = (newStatus) => `Athlete business club status changed to ${newStatus}`;
exports.getEditAthleteTypeDescription = (oldStatus, newStatus) => `Athlete type changed from ${oldStatus} to ${newStatus}`;
exports.getEditDefaultFollowDescription = (defaultFollow) => `Profile ${defaultFollow ? 'selected' : 'unselected'} to be followed by default`;
exports.getCreateFblProfileDescription = () => `Created FBL profile`;
exports.getInvitationLinkDescription = (teamApiId) => `Generated invitation link for club with id ${teamApiId}`;
exports.getEditBusinessStatusDescription = (businessType, oldStatus, newStatus) => `Changed status of ${businessType} from ${oldStatus} to ${newStatus}`;
//# sourceMappingURL=activity-log.descriptions.js.map