"use client"
import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

export function ServicesCard() {
    return (

        <Card className="mt-6 w-80 dark:bg-abrandc-dark-grey dark:text-white ">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter >
                <Button className="">Read More</Button>
            </CardFooter>
        </Card>

    );
}