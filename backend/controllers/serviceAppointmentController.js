import ServiceAppointment from "../models/serviceAppointment.js";
import Service from "../models/Service.js";
import Stripe from "stripe";
import { getAuth } from "@clerk/express";

const stripeKey = process.env.STRIPE_SECRET_KEY || null;
const stripe = stripeKey
  ? new Stripe(stripeKey, { apiVersion: "2022-11-15" })
  : null;

//Helper Functions
