
import './Patron.css'; // Ensure the correct path to your CSS file

const Patrons = () => {
    return (
        <section className="patrons" id="patron">
            <h1>Patrons</h1>
            <ul className="patron-list">
                <li className="patron-item"><strong>Sh. Kaptan Singh (President)</strong>, Surajmal Memorial Education Society, New Delhi</li>
                <li className="patron-item"><strong>Ms. Esha Jakhar (Vice-President)</strong>, Surajmal Memorial Education Society, New Delhi</li>
                <li className="patron-item"><strong>Prof. Prem Vrat (Pro-Chancellor)</strong>, North Cap University, Gurgaon</li>
                <li className="patron-item"><strong>Mr. Kamal Singh (IPS, Former Director)</strong>, Enforcement Directorate</li>
                <li className="patron-item"><strong>Mr. Ajit Singh Chaudhary (Secretary)</strong>, Surajmal Memorial Education Society, New Delhi</li>
                <li className="patron-item"><strong>Prof. Raj Pal Solanki (Treasurer)</strong>, Surajmal Memorial Education Society, New Delhi</li>
                <li className="patron-item"><strong>Prof. Tejbir Singh Rana (Chairman, Academic Committee)</strong>, Surajmal Memorial Education Society, New Delhi</li>
                <li className="patron-item"><strong>Sh. S.S. Solanki (Chairman Disciplinary (L))</strong></li>
            </ul>
        </section>
    );
}

export default Patrons;
