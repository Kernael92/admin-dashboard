import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core component
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-react/components/cardStyle.js"

const useStyles = makeStyles(styles);

export default function Card(props) {
    const classes = useStyles();
    const { className, children, plain, profile, ... rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    children: PropTypes.node
};