import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantsListItem from "./RestaurantsListItem";

test("renders RestaurantsListItem", () => {
  render(
    <table>
      <tbody>
        <RestaurantsListItem
          index={0}
          restaurant={{
            name: "TrueFood",
            city: "Denver",
            state: "CO",
            genre: "American",
            telephone: 7209805120,
          }}
        />
      </tbody>
    </table>
  );
  const linkElement = screen.getByText("Denver");
  expect(linkElement).toBeInTheDocument();
});
