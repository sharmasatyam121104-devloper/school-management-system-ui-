import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video } from "lucide-react"

const classes = Array.from({ length: 12 }, (_, i) => i + 1)

export default function AllClassCamera() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        School Camera Surveillance (Class 1 – 12)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <Card key={cls} className="overflow-hidden">
            <CardContent className="p-0">
              {/* Video UI */}
              <div className="h-48 bg-black flex items-center justify-center text-white">
                <Video className="h-10 w-10 opacity-70" />
                <span className="ml-2 text-sm opacity-70">
                  Live Camera Feed
                </span>
              </div>

              {/* Details */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Class {cls}
                  </h2>
                  <Badge variant="secondary">Live</Badge>
                </div>

                <div className="text-sm text-muted-foreground">
                  Section: A
                </div>

                <div className="text-sm">
                  <span className="font-medium">Camera ID:</span>{" "}
                  CAM-{cls}A-F
                </div>

                <div className="text-sm">
                  <span className="font-medium">Position:</span>{" "}
                  Front View
                </div>

                <div className="text-sm">
                  <span className="font-medium">Location:</span>{" "}
                  Classroom {cls}-A
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
