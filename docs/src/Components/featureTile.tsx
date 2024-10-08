import * as React from "bloatless-react";

import Icon from "../_Components/icon";

export default function FeatureTile(
  iconName: string,
  title: string,
  description: string
) {
  return (
    <div class="surface feature-tile">
      {Icon(iconName)}
      <div>
        <b>{title}</b>
        <p class="secondary">{description}</p>
      </div>
    </div>
  );
}
