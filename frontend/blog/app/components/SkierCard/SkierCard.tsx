'use client';
import React from 'react';
import './SkierCard.css';

interface SkierData {
  skiPassNumber: string;
  averageSpeed: number;
  liftsTaken: string[];
  kilometersSkied: number;
  minutesSkied: number;
  minutesLifted: number;
}

type SkierCardProps = {
  data: SkierData;
};

export default function SkierCard({ data }: SkierCardProps) {
  return (
    <div className="card">
      <div className="header">
        <h2 className="name">Skipass {data.skiPassNumber}</h2>
      </div>
      
      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-number">{data.kilometersSkied.toFixed(2)} km</div>
          <div className="stat-label">Distance</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{data.minutesSkied.toFixed(2)} min</div>
          <div className="stat-label">Skied</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{data.averageSpeed.toFixed(2)} km/h</div>
          <div className="stat-label">Speed</div>
        </div>
      </div>
      
      <ul className="lift-list">
        <h3>🛗 Lifts Taken</h3>
        { data.liftsTaken.map((lift, index) => (
          <li
          key={index}
          className="lift-item"
          style={{ animationDelay: `${0.2 * index}s` }}  
        >
          {lift}
        </li>
        ))}
      </ul>
    </div>
  );
}