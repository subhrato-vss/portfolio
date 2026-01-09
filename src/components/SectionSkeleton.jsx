import { Box, Skeleton, Container } from "@mui/material";

function SectionSkeleton() {
    return (
        <Container sx={{ py: 10 }}>
            <Skeleton variant="text" width={220} height={50} sx={{ bgcolor: "#1e293b" }} />
            <Skeleton variant="rectangular" height={120} sx={{ mt: 3, bgcolor: "#1e293b", borderRadius: 2 }} />
            <Skeleton variant="rectangular" height={120} sx={{ mt: 2, bgcolor: "#1e293b", borderRadius: 2 }} />
        </Container>
    );
}

export default SectionSkeleton;