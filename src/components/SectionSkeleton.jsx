import { Box, Skeleton, Container } from "@mui/material";

const sk = {
    bgcolor: "rgba(255,255,255,0.15)",
};

export default function SectionSkeleton() {
    return (
        <div className="cv-card-area">
            <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
                <div className="row row--25">

                    <div className="col-xxl-3 col-lg-12">
                        <div
                            className="d-flex flex-wrap align-content-start h-100 w-100 tab-content-overlay-to-top"
                            id="home"
                        >
                            <div className="position-sticky sticky-top tmp-sticky-top w-100">
                                <Box
                                    sx={{
                                        // width: 300,
                                        bgcolor: "#0b0b12",
                                        borderRadius: 4,
                                        p: 3,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Skeleton variant="rounded" height={220} sx={sk} />

                                    <Skeleton height={36} sx={{ ...sk, mt: 2 }} />
                                    <Skeleton height={22} width="70%" sx={sk} />

                                    <Box mt={2}>
                                        <Skeleton height={20} width="90%" sx={sk} />
                                        <Skeleton height={20} width="80%" sx={sk} />
                                    </Box>

                                    <Box display="flex" gap={1.5} mt={2}>
                                        {[1, 2, 3, 4].map((i) => (
                                            <Skeleton key={i} variant="circular" width={36} height={36} sx={sk} />
                                        ))}
                                    </Box>

                                    <Skeleton variant="rounded" height={48} sx={{ ...sk, mt: 3 }} />
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-9 col-lg-12">
                        <div className="tab-wrapper-overlay-to-top">
                            <Box flex={1}>

                                {/* Tabs */}
                                <Box
                                    sx={{
                                        bgcolor: "#0b0b12",
                                        borderRadius: 3,
                                        p: 3,
                                        display: "flex",
                                        gap: 2,
                                        mb: 4,
                                    }}
                                >
                                    {[1, 2, 3, 4].map((i) => (
                                        <Skeleton
                                            key={i}
                                            variant="rounded"
                                            // height={75}
                                            sx={{
                                                ...sk,
                                                flex: {
                                                    xs: "0 0 50px",   // mobile
                                                    sm: "0 0 80px",  // tablet
                                                    md: "0 0 138px",  // laptop+
                                                },
                                                height: {
                                                    xs: 30,   // mobile height
                                                    sm: 45,   // tablet
                                                    md: 75,   // desktop
                                                },
                                                borderRadius: "10px",
                                            }}
                                        />
                                    ))}

                                    {/* Empty tab space */}
                                    <Box sx={{ flex: 1 }} />
                                </Box>

                                {/* About area */}
                                <Box
                                    sx={{
                                        bgcolor: "#0b0b12",
                                        borderRadius: 4,
                                        p: 6,
                                    }}
                                >
                                    <Skeleton width={120} height={24} sx={sk} />

                                    <Skeleton height={56} width="70%" sx={sk} />
                                    <Skeleton height={56} width="60%" sx={sk} />

                                    <Skeleton height={22} width="90%" sx={sk} />
                                    <Skeleton height={22} width="85%" sx={sk} />
                                    <Skeleton height={22} width="80%" sx={sk} />

                                    <Box
                                        display="grid"
                                        gridTemplateColumns="repeat(2, 1fr)"
                                        gap={3}
                                        mt={4}
                                    >
                                        {[1, 2, 3, 4].map((i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    bgcolor: "#12121a",
                                                    borderRadius: 3,
                                                    p: 3,
                                                }}
                                            >
                                                <Skeleton variant="circular" width={40} height={40} sx={sk} />
                                                <Skeleton height={28} width="60%" sx={{ ...sk, mt: 1 }} />
                                                <Skeleton height={18} width="90%" sx={sk} />
                                                <Skeleton height={18} width="80%" sx={sk} />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
