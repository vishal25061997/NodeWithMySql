const form = document.querySelector("form");
const data = document.querySelectorAll("input");
const p = document.querySelector("p");

form.addEventListener("submit", sendSignUpData);
async function sendSignUpData(e) {
  e.preventDefault();
  console.log("respoinse reviving >>>>");
  if (data[2].value.trim() === data[3].value.trim()) {
    try {
      let response = await fetch(
        `https://plum-mysterious-pike.cyclic.cloud/signup`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: data[0].value,
            email: data[1].value,
            password: data[2].value,
          }),
        }
      );
      let jsonRes = await response.json();
      if (jsonRes.error) {
        p.innerText = "User already exists, please try to login";
        p.style.color = "red";
      } else {
        console.log("hi");
      }
    } catch (err) {
      if (err.statusCode === 409) {
      }
    }
  } else {
    p.innerText = "Password mismatch";
    p.style.color = "red";
  }
}
