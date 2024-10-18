export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

export const googleClientId = assertValue(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  'Missing environment variable: NEXT_PUBLIC_GOOGLE_CLIENT_ID',
)

export const googleClientSecret = assertValue(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  'Missing environment variable: NEXT_PUBLIC_GOOGLE_CLIENT_SECRET',
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
