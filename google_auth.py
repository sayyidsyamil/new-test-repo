import google.auth
from google.auth.transport.requests import Request

def authenticate_google_account(credentials):
    creds = None
    if credentials:
        creds = google.auth.credentials.Credentials.from_authorized_user_info(credentials)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            raise Exception("Failed to authenticate Google Account")
    return creds