window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    // const blob = document.getElementById("blob")
    console.log(blob);
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };