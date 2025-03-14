import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {["Python", "Django", "MySQL" ,"Node.js", "Express.js",].map(skill => (
                        <div className="skills__data" key={skill}>
                            <HiCheckBadge />
                            <div>
                                <h3 className="skills__name">{skill}</h3>
                                <span className="skills__level">Advanced</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skills__group">
                    {["Redis", "Solidity", "Git", "AWS Lambda"].map(skill => (
                        <div className="skills__data" key={skill}>
                            <HiCheckBadge />
                            <div>
                                <h3 className="skills__name">{skill}</h3>
                                <span className="skills__level">Advanced</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Backend;