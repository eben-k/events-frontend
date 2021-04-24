import axios, { AxiosRequestConfig } from "axios";
import { apiBaseUrl } from "../config/environment";
import {
  GetCareRecipientsResponse,
  GetEventsResponse,
  GetEventTypesResponse,
  Query,
} from "../types/event";

const config: AxiosRequestConfig = {
  baseURL: `${apiBaseUrl}events`,
};

const http = axios.create(config);

export const getRecipientsService = async () => {
  const response = await http.get<GetCareRecipientsResponse>("care-recipients");

  return response.data;
};

export const getEventsService = async (params: Query) => {
  const response = await http.get<GetEventsResponse>("", { params });

  return response.data;
};

export const getEventTypesService = async () => {
  const response = await http.get<GetEventTypesResponse>("types");

  return response.data;
};
