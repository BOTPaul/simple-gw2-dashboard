type SuccessResponse<T> = {
    success: true;
    data: T
}

type ErrorResponse = {
    success: false;
    errorMessage: string;
}

export type ServiceResponse<T> = SuccessResponse<T> | ErrorResponse;