import {LoadingStatus} from "../../types";
import {RootState} from "../../store";
import {NotificationsState} from "./contracts/state";

export const selectNotifications = (state: RootState): NotificationsState => state.notifications;
export const selectNotificationsList = (state: RootState) => selectNotifications(state).notificationsList;
export const selectNotificationsTweetAuthors = (state: RootState) => selectNotifications(state).tweetAuthors;
export const selectLoadingState = (state: RootState): LoadingStatus => selectNotifications(state).loadingState;
export const selectIsNotificationsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADING;
export const selectIsNotificationsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADED;
