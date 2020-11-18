import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Searchpage.css";
import SearchResult from "./SearchResult";

function Searchpage() {
  const [input, setInput] = useState();
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>300+ stays </p>
        <h2>Places to stay near you</h2>
        <Button veriant="outlined">Cancellation flexibility</Button>
        <Button veriant="outlined">Type of place</Button>
        <Button veriant="outlined">Price</Button>
        <Button veriant="outlined">Instant Book</Button>
        <Button veriant="outlined">More Filters</Button>
        <Button className="btn_showmap" veriant="outlined">
          Show Map
        </Button>
      </div>
      <div className="search__result">
        <SearchResult
          img="https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          location="chandigarh"
          title="beautiful rooms in chandigarh"
          star="4.5"
          description="some little description about rooms and location"
          price="$19/Night stay"
          total="$100"
        />
      </div>
    </div>
  );
}

export default Searchpage;
