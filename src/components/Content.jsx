import React from "react";

export default function Content({ ucret }) {
  return (
    <>
      <div className="content-div">
        <h3>Position Absolute Acı Pizza</h3>
        <div className="content-info">
          <p className="content-ucret">{ucret}₺</p>
          <div className="content-points">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            facilis repudiandae nulla consequatur unde deleniti in, eius ut
            distinctio, assumenda totam minus! Maxime id magni quod, commodi
            libero unde perspiciatis!
          </p>
        </div>
      </div>
    </>
  );
}
