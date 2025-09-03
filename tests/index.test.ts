import request from "supertest";
import express from "express";


const app = express();
app.get("/", (req, res) => {
  res.send("Hello NiCE!");
});


describe("GET /", () => {
  it("should return Hello NiCE", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello NiCE!");
  });
});
