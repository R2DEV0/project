import React from 'react';

const Education = () => {

    return(
        <section id="section3" className="min-h-screen pt-40 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 md:hidden">Education</h2>
            <div className="space-y-6 md:text-right">
                <div className="border-l-4 lg:border-r-4 lg:border-l-0 border-blue-900 pl-4 md:pr-8">
                    <h3 className="font-semibold text-lg">Amazon Web Services</h3>
                    <p className="text-sm text-gray-500">Associate AWS Certified Developer - 2024</p>
                </div>

                <div className="border-l-4 lg:border-r-4 lg:border-l-0 border-blue-900 pl-4 md:pr-8">
                    <h3 className="font-semibold text-lg">City University of Seattle</h3>
                    <p className="text-sm text-gray-500">BS in Applied Computing - Seattle, WA - 2021</p>
                </div>

                <div className="border-l-4 lg:border-r-4 lg:border-l-0 border-blue-900 pl-4 md:pr-8">
                    <h3 className="font-semibold text-lg">Coding Dojo</h3>
                    <p className="text-sm text-gray-500">Full-Stack Developer Certificate - Seattle, WA - 2020</p>
                </div>

                <div className="border-l-4 lg:border-r-4 lg:border-l-0 border-blue-900 pl-4 md:pr-8">
                    <h3 className="font-semibold text-lg">City University of Seattle</h3>
                    <p className="text-sm text-gray-500">BS in Business Administration - Seattle, WA - 2017</p>
                </div>

                <div className="border-l-4 lg:border-r-4 lg:border-l-0 border-blue-900 pl-4 md:pr-8">
                    <h3 className="font-semibold text-lg">Community College of the Air Force</h3>
                    <p className="text-sm text-gray-500">AAS in Transportation - Elmendorf AFB, AK - 2014</p>
                </div>
            </div>
        </section>
    )
}

export default Education;