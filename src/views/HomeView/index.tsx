import { FC } from "react";

import styles from "./index.module.css";

export const HomeView: FC = ({}) => {
  return (
    <div className="container mx-auto 2xl:px-0">
      <div className="hero min-h-16 p-0">
          <div className="text-center hero-content w-full">
            <div className="w-full">
              <br /><br /><br /><br /><br /><br />
              <h1 className="mb-5 text-5xl font-bold">Acid Face</h1>
              <br /><br />
              <h1 className="mb-5 text-3xl font-bold">Coming Soon...</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
