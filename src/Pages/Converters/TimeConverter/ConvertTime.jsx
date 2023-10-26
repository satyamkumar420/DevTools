const ConvertTime = ({ inputValue, fromUnit, toUnit, setResult }) => {
  // Conversion logic here
  let value = parseFloat(inputValue);

  // Seconds to minutes
  if (fromUnit === "seconds") {
    if (toUnit === "minutes") {
      value /= 60;
    } else if (toUnit === "hours") {
      value /= 3600;
    } else if (toUnit === "days") {
      value /= 86400;
    } else if (toUnit === "weeks") {
      value /= 604800;
    } else if (toUnit === "months") {
      value /= 2628000;
    } else if (toUnit === "years") {
      value /= 31536000;
    }
  }

  // Minutes to seconds
  if (fromUnit === "minutes") {
    if (toUnit === "seconds") {
      value *= 60;
    } else if (toUnit === "hours") {
      value /= 60;
    } else if (toUnit === "days") {
      value /= 1440;
    } else if (toUnit === "weeks") {
      value /= 10080;
    } else if (toUnit === "months") {
      value /= 43800;
    } else if (toUnit === "years") {
      value /= 525600;
    }
  }
  // Hours to seconds
  if (fromUnit === "hours") {
    if (toUnit === "seconds") {
      value *= 3600;
    } else if (toUnit === "minutes") {
      value *= 60;
    } else if (toUnit === "days") {
      value /= 24;
    } else if (toUnit === "weeks") {
      value /= 168;
    } else if (toUnit === "months") {
      value /= 730;
    } else if (toUnit === "years") {
      value /= 8760;
    }
  }

  // Days to seconds

  setResult(value.toFixed(2));
};

export default ConvertTime;
