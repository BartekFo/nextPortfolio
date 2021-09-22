// import { FC } from 'react';
// import { useTranslation } from 'react-i18next';
// import { NavLink } from 'react-router-dom';
// import CSSTransition from 'react-transition-group/CSSTransition';
//
// import classes from './MobileNavbarItems.module.css';

// const MobileNavbarItems: FC<{ isNavbarOpen: boolean }> = ({ isNavbarOpen }) => {
//   const { t } = useTranslation();
//
//   return (
//     <CSSTransition
//       mountOnEnter
//       unmountOnExit
//       in={isNavbarOpen}
//       timeout={400}
//       classNames={{
//         enter: '',
//         enterActive: classes.openingMobileNavbar,
//         exit: '',
//         exitActive: classes.closingMobileNavbar,
//       }}
//     >
//       <div className={className}>
//         <ul className={classes.listWrapper}>
//           <li>
//             <NavLink to="/home" activeClassName={classes.active}>
//               {t('NavbarItemOne')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" activeClassName={classes.active}>
//               {t('NavbarItemTwo')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/projects" activeClassName={classes.active}>
//               {t('NavbarItemThree')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/certificates" activeClassName={classes.active}>
//               {t('NavbarItemFour')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/media" activeClassName={classes.active}>
//               Media
//             </NavLink>
//           </li>
//           <li>
//             <a className={classes.contactLink} href="mailto:bartoszformanowski@gmail.com">
//               {t('NavbarItemFive')}
//             </a>
//           </li>
//         </ul>
//       </div>
//     </CSSTransition>
//   );
// };
//
// export default MobileNavbarItems;
