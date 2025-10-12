import type { FC } from "react";
import './Contact.css';

const Contact: FC = () => {

    return (
        <div className="contact">
            <h1>Contact</h1>
            <article className="contact-container">
                <h2>Zack Kramer</h2>
                <p><a href="mailto:zckramer83@gmail.com">email</a></p>
                <p><a href="https://github.com/zckramer">github</a></p>
                <p><a href="https://linkedin.com/in/zckramer" target="_blank">linkedin</a></p>
            </article>
        </div>
    );
};

export default Contact;