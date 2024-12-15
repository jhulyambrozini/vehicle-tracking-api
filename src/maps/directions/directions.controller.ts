import { Controller, Get, Query } from "@nestjs/common";
import { DirectionsService } from "./directions.service";

@Controller("directions")
export class DirectionsController {
  constructor(private directionServices: DirectionsService) {}
  @Get()
  getDirection(
    @Query("originId") originId: string,
    @Query("destinationId") destinationId: string
  ) {
    return this.directionServices.getDirections(originId, destinationId);
  }
}
