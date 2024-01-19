export const LoadingSvg = () => {
  return (
    <svg height="100%" viewBox="0 0 100 100" width="100%">
      <circle cx="15" cy="50" fill="currentColor" r="10">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="0.65s"
          keySplines="0 0.5 0.5 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;10"
        />
      </circle>
      <circle cx="15" cy="50" fill="currentColor" r="10">
        <animate
          attributeName="cx"
          begin="0s"
          calcMode="spline"
          dur="0.65s"
          keySplines="0 0.5 0.5 1; 0 0.5 0.5 1"
          keyTimes="0;0.75;1"
          repeatCount="indefinite"
          values="15;50;50"
        />
      </circle>
      <circle cx="50" cy="50" fill="currentColor" r="10">
        <animate
          attributeName="cx"
          begin="0s"
          calcMode="spline"
          dur="0.65s"
          keySplines="0 0.5 0.5 1; 0 0.5 0.5 1"
          keyTimes="0;0.75;1"
          repeatCount="indefinite"
          values="50;85;85"
        />
      </circle>
      <circle cx="85" cy="50" fill="currentColor" r="10">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="0.65s"
          keySplines="0 0.5 0.5 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="10;0"
        />
      </circle>
    </svg>
  );
};
