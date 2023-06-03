GOOGLE_PROJECT_ID=freshgrocie-capstone

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/freshgrocie-api \
  --project=$GOOGLE_PROJECT_ID

gcloud beta run deploy freshgrocie-api \
  --image gcr.io/$GOOGLE_PROJECT_ID/freshgrocie-api \
  --platform managed \
  --region asia-southeast2 \
  --project=$GOOGLE_PROJECT_ID