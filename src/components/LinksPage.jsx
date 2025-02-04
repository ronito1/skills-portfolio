import React, { useState } from 'react';
import './LinksPage.css'; // Import the CSS file

function LinksPage() {
    const [links] = useState([
        { id: 1, name: "Disease Detection App", url: "https://disease-detection-app.vercel.app/" },
        { id: 2, name: "Food Delivery App", url: "https://www.linkedin.com/posts/ronitpathak_mernstack-frontend-backend-activity-7233774625489334272-pwlR?utm_source=share&utm_medium=member_desktop" },
        { id: 3, name: "LinkedIn", url: "https://www.linkedin.com/in/ronitpathak" },
        { id: 4, name: "PDF Analyzer", url: "https://drive.google.com/file/d/1-YSc3KClNcXwXLTmlQ9JDAv8mlE6hyzL/view?usp=sharing" },
        { id: 5, name: "GitHub", url: "https://github.com/ronito1" },
    ]);

    return (
        <div className="links-container">
            <h1>Work Links</h1>
            <div className="links-list">
                {links.map(link => (
                    <div className="link-card" key={link.id}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinksPage;
