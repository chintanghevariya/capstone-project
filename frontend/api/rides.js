import axios from 'axios';
import { useEffect, useState } from 'react';


export async function getRides() {
    
    try {
        const request = await axios.get(
            "http://localhost:4000/rides/?from=Toronto",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWYxODNiNWI5ZTdiZjE0YTY5NWI4ZjIiLCJlbWFpbCI6ImFhcnl0cml2ZWRpQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkFhcnkiLCJsYXN0TmFtZSI6IlRyaXZlZGkiLCJwYXNzd29yZCI6IjEyMzQ1NiIsInJvbGUiOiJwYXNzZW5nZXIiLCJkcml2ZXJEZXRhaWxzVmFsaWQiOmZhbHNlLCJfX3YiOjAsImlhdCI6MTY0MzIxODExMX0.NVTWMZjj3B9yi8Pl2VCvCZf9YySrO16gyFu4kPqSu7o"
                }
            }
        );
        return [request, null];
    }
    catch (e) {
        return [null, e.message];
    }
}