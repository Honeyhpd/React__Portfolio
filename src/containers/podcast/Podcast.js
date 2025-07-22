import React from "react";
import { podcastSection } from "../../portfolio";
import "./Podcast.scss";

export default function PodcastSection() {
  if (!podcastSection.Display) return null;

  return (
    <div className="podcast-section">
      <h1 className="podcast-title">{podcastSection.title}</h1>
      <p className="podcast-subtitle">{podcastSection.subtitle}</p>
      <div className="podcast-cards-container">
        {podcastSection.podcast.map((item, idx) => (
          <div className="podcast-card" key={idx}>
  <h3>{item.title}</h3>
  <p className="podcast-subtitle">{item.subtitle}</p>
  <div className="podcast-buttons-row">
    <a href={item.link} className="podcast-button" rel="noopener noreferrer">
      View Program
    </a>
    <a href={item.certificate} className="podcast-button" rel="noopener noreferrer">
      Certificate
    </a>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}