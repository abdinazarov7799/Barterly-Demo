import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import useFavorites from "../../Store/useFavorites";
const FavoritesDrawer = () => {
    const { isOpen, onClose } = useFavorites();
    return (
        <>
            <Drawer title="Favorites" placement="right" onClose={onClose} open={isOpen}>
                <p>This is demo version</p>
            </Drawer>
        </>
    );
};
export default FavoritesDrawer;