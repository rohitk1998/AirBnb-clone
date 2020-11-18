import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Place from "./Place";
import Hostcard from "./Hostcard";

// ES7 sinnpet to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__place">
        <div className="place__row">
          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="4-Hour Derive"
            location="Sainj"
          />

          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="3-Hour Derive"
            location="Mandi"
          />
          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="2-Hour Derive"
            location="Kinnour"
          />
          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="4.5-Hour Derive"
            location="Shimla"
          />
        </div>
        <div className="place__row">
          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="12-Hour Derive"
            location="kashmir"
          />
          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="2-Hour Derive"
            location="Bilaspur"
          />
          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="6-Hour Derive"
            location="Leh"
          />
          <Place
            src="https://images.unsplash.com/photo-1584098731256-77f62e143f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
            tocover="10-Hour Derive"
            location="Ladhak"
          />
        </div>
      </div>
      <h2>Live Anywhere</h2>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1596808042579-6057d4b79fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="outdoor stays"
          description="there is somethign beautiful about this moringing "
          price="$19/Night-Day"
        />
        <Card
          src="https://images.unsplash.com/photo-1578048117504-495014256835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="jungle stays"
          description="there is somethign Advntures about this moringing "
          price="$15/Night-Day"
        />
        <Card
          src="https://images.unsplash.com/photo-1572547564070-305733e0243f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="jungle stays"
          description="there is somethign Advntures about this moringing "
          price="$15/Night-Day"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1583467875212-de8c3a4da6a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="jungle stays"
          description="there is somethign Advntures about this moringing "
          price="$15/Night-Day"
        />
        <Card
          src="https://images.unsplash.com/photo-1580389915863-f9bc9ff15bd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80"
          title="jungle stays"
          description="there is somethign Advntures about this moringing "
          price="$15/Night-Day"
        />
        <Card
          src="https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="jungle stays"
          description="there is somethign Advntures about this moringing "
          price="$15/Night-Day"
        />
      </div>
      <h1>Join millions of hosts on Airbnb</h1>
      <div className="hosting__card">
        <Hostcard
          src="https://images.unsplash.com/photo-1436463971918-f6f039f752c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          title="Host your home"
        />
        <Hostcard
          src="https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"
          title="Host an Online Experience"
        />
        <Hostcard
          src="https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          title="Host an Experience"
        />
      </div>
    </div>
  );
}

// ES7 sinnpet to do 'rfce'

export default Home;
