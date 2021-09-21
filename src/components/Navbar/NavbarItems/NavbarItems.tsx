import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";

import classes from "./NavbarItems.module.css";

import {cursorActions} from "../../../store/customCursor";

const NavbarItems = () => {
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const handleMouseEnter = () => {
        dispatch(cursorActions.setType('link'))
    }

    const handleMouseLeave = () => {
        dispatch(cursorActions.setType('default'))
    }

    return (
        <>
            <ul className={classes.listWrapper}>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><NavLink to={'/home'} activeClassName={classes.active}>{t('NavbarItemOne')}</NavLink></li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><NavLink to={'/about'} activeClassName={classes.active}>{t('NavbarItemTwo')}</NavLink></li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><NavLink to={'/projects'} activeClassName={classes.active}>{t('NavbarItemThree')}</NavLink></li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><NavLink to={'/certificates'} activeClassName={classes.active}>{t('NavbarItemFour')}</NavLink></li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><NavLink to={'/media'} activeClassName={classes.active}>Media</NavLink></li>
            </ul>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={classes.contactLink} href="mailto:bartoszformanowski@gmail.com">{t('NavbarItemFive')}</a>
        </>
    )
}

export default NavbarItems