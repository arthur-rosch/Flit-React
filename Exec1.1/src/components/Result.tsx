import { useState } from "react";
interface ResultProps {
  Result: [];
}
export function Result({ Result }: ResultProps) {
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