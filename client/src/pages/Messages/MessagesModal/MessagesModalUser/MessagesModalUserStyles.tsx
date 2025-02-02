import {makeStyles, Theme} from "@material-ui/core";

interface MessagesModalUserStylesProps {
    mutedDirectMessages: boolean;
}

export const useMessagesModalUserStyles = makeStyles<Theme, MessagesModalUserStylesProps>((theme) => ({
    container: {
        width: "100%",
        display: "flex",
        alignItems: 'flex-start',
        paddingLeft: 15,
        paddingTop: 8,
        paddingBottom: 8,
        cursor: props => props.mutedDirectMessages ? "default" : "pointer",
        opacity: props => props.mutedDirectMessages ? 0.5 : 1,
    },
    link: {
        textDecoration: 'none',
    },
    listAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: 15,
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerInfo: {
        width: 350
    },
    lockIcon: {
        "& svg": {
            marginLeft: 3,
            marginBottom: -3,
            height: "1.2em",
        },
    },
    fullName: {
        color: theme.palette.text.primary,
        fontWeight: 800,
        fontSize: 15,
    },
    username: {
        color: theme.palette.text.secondary,
        fontWeight: 400,
        fontSize: 15,
    },
}));
