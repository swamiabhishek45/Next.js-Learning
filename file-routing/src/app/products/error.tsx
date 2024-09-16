"use client";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="m-5">
            {error.message} <button onClick={reset} className="bg-red-300 p-1 rounded-md ml-2">Try again</button>
        </div>
    );
}
