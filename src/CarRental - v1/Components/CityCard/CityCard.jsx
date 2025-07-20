import React, { useEffect, useContext, useState } from 'react';
import {  Card, CardBody } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CityCard = ({ name }) => {
    return (
        <Link to={'/carList'}>
            <Card
                className="relative rounded-full overflow-hidden hover:-translate-y-2 transition-all"
                color="transparent"
            >
                <CardBody className="relative flex justify-center items-center h-0 bg-white">
                    <p>{name}</p>

                </CardBody>
            </Card>
        </Link>
    );
}

export default CityCard;