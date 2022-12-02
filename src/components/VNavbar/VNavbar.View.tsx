import React, { PropsWithChildren } from "react";
import * as Style from "./VNavbar.style";
import { Link } from "react-router-dom";

type Props = {
  categoryBooks: string[],
  filterFn: (c: string) => void
};

export const VNavbarView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.Nav>
      <Style.Ul>{props.categoryBooks && props.categoryBooks.map((item, i) => {

            return (
              <Style.Li onClick={() => props.filterFn(item)} key={i}>
                <Link to={`/`}>{item}</Link>
              </Style.Li>
            );
          })}
      </Style.Ul>
    </Style.Nav>
  );
};
