export interface Event {
  id: string;
  caregiver_id: string;
  care_recipient_id: string;
  event_type: string;
  timestamp: string;
}

export interface Query {
  page: number;
  limit: number;
  recipient_id?: string;
  event_type?: string;
}

export interface CareRecipient {
  recipient_id: string;
  total_events: string;
}

export interface GetEventsResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  events: Event[];
}

export interface GetCareRecipientsResponse {
  recipients: CareRecipient[];
}

export interface EventType {
  event_type: string;
  total_events: number;
}

export interface GetEventTypesResponse {
  event_types: EventType[];
}
