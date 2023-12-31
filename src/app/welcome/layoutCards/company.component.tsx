"use client"
import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { SiHomeassistantcommunitystore } from "react-icons/si";

export default function CompanyCard() {
    return (
        <Card className="mt-6 w-80 dark:bg-abrandc-dark-grey dark:text-white">
            <CardBody>
            <div
                className={`rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/40 dark:text-white shadow-lg grid place-items-center  h-16 w-16 mb-2`}
              >
                <SiHomeassistantcommunitystore size={40} />
              </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                </Typography>
                <Typography>
                    Because it&apos;s about motivating the doers. Because I&apos;m here to
                    follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2 dark:text-white">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}