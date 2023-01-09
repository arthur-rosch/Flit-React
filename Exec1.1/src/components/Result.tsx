import { useState } from "react";

export function Result({ Result }) {
  return (
    <h2>
      {
        Result.map(result => {
          return <h2>{result}</h2>
        })
      }
    </h2>
  )
}