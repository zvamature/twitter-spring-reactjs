import {makeStyles, Theme} from "@material-ui/core";

export const useDirectUserItemStyles = makeStyles((theme: Theme) => ({
    container: {
        width: "100%",
        display: "flex",
        alignItems: 'flex-start',
        paddingLeft: 15,
        cursor: 'pointer',
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
    checkIcon: {
        float: "right",
        "& svg": {
            color: theme.palette.primary.main,
            marginTop: 5,
            height: "1.3em",
        },
    },
}));
