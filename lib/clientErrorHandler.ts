import { message } from "antd";
import axios from "axios";

const clientErrorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = error.response?.data as any;

    // // Mongo duplicate key
    // if (data?.message?.includes("E11000")) {
    //   return message.error("This mobile number is already registered");
    // }

    // Normal API message
    if (data?.message) {
      return message.error(data.message);
    }

    return message.error(
      error.response?.statusText || "Server error"
    );
  }

  if (error instanceof Error) {
    return message.error(error.message);
  }

  return message.error("Internal server error");
};

export default clientErrorHandler;
