import React from 'react';

const Help = () => {
    return (
        <div>
            <h2 className="text-base-semi">Need help?</h2>
            <div className="text-base-regular my-2">
                <ul className="gap-y-2 flex flex-col">
                    <li>
                        <a href="mailto:contact@lelo.jewelry?subject=A question about lelo&amp;body=">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Help;
