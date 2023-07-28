import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Close, Home, Info, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TimerOffIcon from '@mui/icons-material/TimerOff';

const NavigationDrawer = ({ open, onClose }) => {
    return (
        <Drawer anchor='left' open={open} onClose={onClose}>
            <List>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Page d'accueil" />
                </ListItem>
                <ListItem button onClick={onClose} component={Link} to="/Entretien">
                    <ListItemIcon>
                        <Diversity3Icon />
                    </ListItemIcon>
                    <ListItemText primary="Entretien" />
                </ListItem>
                <ListItem button onClick={onClose} component={Link} to="/PasseCompose">
                    <ListItemIcon>
                        <TimerOffIcon />
                    </ListItemIcon>
                    <ListItemText primary="Le temps Passé composé" />
                </ListItem>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button onClick={onClose}>
                    <ListItemIcon>
                        <Close />
                    </ListItemIcon>
                    <ListItemText primary="Fermer" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default NavigationDrawer;